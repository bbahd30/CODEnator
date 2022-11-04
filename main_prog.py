# import cv2 as cv
# import numpy as np
# from matplotlib import pyplot as plt
# from skimage import measure
# import imutils
# import argparse
# from imutils import contours
from ui_extraction import *


my_dict = {}
img = cv.imread('yo44.png')              #PUT IN INPUT IMAGE NAME HERE...
rgb = cv.cvtColor(img, cv.COLOR_BGR2RGB)
lap1 = img_processing(img)
img_innit = fillhole(lap1, img)
gray =  cv.cvtColor(img_innit, cv.COLOR_BGR2GRAY)
blurred = cv.GaussianBlur(gray, (11, 11), 0)
cv.imshow('gray', gray)
cv.imshow('img_innit', img_innit)
cv.imshow('blurred', blurred)
#Threshold the image to reveal light regions in the blurred image.

thresh = cv.threshold(blurred, 80, 255, cv.THRESH_BINARY)[1]
cv.imshow('Threshold', thresh)
#This operation takes any pixel value p>=200, and sets it to 255.
#Pixel values < 200 are set to 0.

#Now, to remove noise from the resulting thresholded image, apply some erosions and dilations.
thresh = cv.erode(thresh, None, iterations = 2)
thresh = cv.dilate(thresh, None, iterations = 4)


#The critical step here, is to label each of the regions in the above figure, and save them seperately for further 
#classification.


# perform a connected component analysis on the thresholded
# image, then initialize a mask to store only the "large"
# components

labels = measure.label(thresh, background=0)
mask = np.zeros(thresh.shape, dtype="uint8")

# loop over the unique components
for label in np.unique(labels):
	# if this is the background label, ignore it
	if label == 0:
		continue

# otherwise, construct the label mask and count the
# number of pixels 
	labelMask = np.zeros(thresh.shape, dtype="uint8")
	labelMask[labels == label] = 255
	numPixels = cv.countNonZero(labelMask)
	
    # if the number of pixels in the component is sufficiently
	# large, then add it to our mask of "large blobs"
	if numPixels > 300:
		mask = cv.add(mask, labelMask)

#Line 32 performs the actual connected-component analysis using the scikit-image library.
#The labels returned from measure.label has the exact same dimensions as our thresh image - 
#The only difference is that 'labels' stores a unique integer for each blob in thresh.

#We then initialize a mask to store only large blobs ---> line 33

#On line 36, we start looping over each of the unique labels. If the label is zero, 
#then we know that we are examining the background region and can safely ignore it --> lines 38 and 39.

# As, i'll be using a bit-wise operated image here, i will not whave to worry about the background.
#Otherwise, for ROIs, we are contructing a mask for that current label on lines ---> 43 and 44

#line 45 then counts the number of non-zero pixels in the labelMask.
#If numPixels exceeds a pre-defined threshold (300 pixels here)
#Then we consider the blob as large enough to include in the mask.

#Find the contours in the mask, then sort them from left to right.

cnts = cv.findContours(mask.copy(), cv.RETR_EXTERNAL, cv.CHAIN_APPROX_SIMPLE)
cnts = imutils.grab_contours(cnts)
#cnts = contours.sort_contours(cnts)[0]

#Loop over the contours
'''
for c in cnts:
  x, y, w, h = cv.boundingRect(c)
 
    # Make sure contour area is large enough
  if (cv.contourArea(c)) > 20:
    cv.rectangle(img,(x,y), (x+w,y+h), (255,0,0), 2)
         
cv.imshow('All contours with bounding box', img)
'''
file_t = open("component.txt", "w")

def color_finder(x, y, w, h):
  b, g, r = img[y + int(h/2), x + int(w/2)]
  lst = (r, g, b)
  return lst

def list_maker(w, h, x, y):
  lst = [x, y, h, w]
  return lst




for (i, c) in enumerate(cnts):
	# draw the bright spot on the image
    (x, y, w, h) = cv.boundingRect(c)
    rect = cv.minAreaRect(c)
    box = np.int0(cv.boxPoints(rect))
    cv.drawContours(img, [box], 0, (36,255,12), 3)
    cv.putText(img, "#{}".format(i + 1), (x, y - 15),
    cv.FONT_HERSHEY_SIMPLEX, 0.45, (0, 0, 255), 2)



    # my_dict = {}
    key_write = color_finder(x, y, w, h)
    val_write = list_maker(w, h, x, y)
    my_dict[key_write] = val_write
    file_t.write(str(my_dict) + '\n')
    print(my_dict)
  
file_t.close()
# show the output image
cv.imshow("Image", img)
cv.waitKey(0)