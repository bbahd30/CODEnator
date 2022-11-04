from django.shortcuts import render
from django.http import HttpResponse
# from .forms import *
from .tag_viewsets import * 
# from ...main_prog import my_dict
# from ...identification import components

import cv2 as cv
import numpy as np
from matplotlib import pyplot as plt
from skimage import measure
import imutils
import argparse
from imutils import contours

my_dict = {}
components = []

img = cv.imread("/home/bhoomi/CourseProjects/OOAD/OOAD_Project/CODEnator/yo44.png")
# cv.imshow("IMAGE",img)
# from .main_prog import *

# # Create your views here.
# def uploader(request):
#     if request.method == 'POST':
#         form = ImageForm(request.POST, request.FILES)
#         if form.is_valid():
#             form.save()
#     form = ImageForm()
#     return render(request, 'CODEnator/index.html', {'form': form})


# def input(request):
#     # if request.method == 'POST':
#     #     form = InputForm(request.POST)

#     #     if form.is_valid():
#     #         form.save()
#     # form = InputForm()
#     # return render(request, 'CODEnator/input.html', {'input_form': form})
#     return render(request, 'CODEnator/input.html')

def store(request):
    # component = ['hr', 'anchor', 'navbar', 'table']
    Tag.objects.create(tags_dict=components)
    return HttpResponse("dictionary stored")

def fillhole(input_image, img):
    filedir = "CODEnator"
    im_flood_fill = input_image.copy()
    h, w = input_image.shape[:2]
    mask = np.zeros((h + 2, w + 2), np.uint8)
    im_flood_fill = im_flood_fill.astype("uint8")
    cv.floodFill(im_flood_fill, mask, (0, 0), (255, 255, 255), (100, 100, 100), (50, 50, 50), cv.FLOODFILL_FIXED_RANGE)
 #   cv.imshow('flood_fill_result', im_flood_fill)
    im_floodfill_inv = cv.bitwise_not(im_flood_fill)
  #  cv.imshow('inverting_flood_fill', im_floodfill_inv)
    img_out = input_image | im_floodfill_inv
  #  cv.imshow('bitwise_or', img_out)
    gray = cv.cvtColor(img_out, cv.COLOR_BGR2GRAY)
   # cv.imshow('grayscaling', gray)
    threshold, thresh = cv.threshold(gray, 140, 255, cv.THRESH_BINARY)
  #  cv.imshow('thresholded_result', thresh)
    #WORK ON BITWISE AND STILL LEFT..... GOTTA FIGURE OUT A WAY TO INPUT img_out as MASK
    img_innit = cv.bitwise_and(img, img, mask = gray)
    
    return img_innit


    #The following operations are being done to allow contouring of img_innit


    #cv.floodFill(im_flood_fill, mask, (0, 0), (255, 255, 255), (100, 100, 100), (50, 50, 50), cv.FLOODFILL_FIXED_RANGE)
#    return im_floodfill_inv, img_out, img_innit
    #img_innit is of use to us...

def findcontours(input_image):
    contours, hierarchies = cv.findContours(input_image, cv.RETR_LIST, cv.CHAIN_APPROX_SIMPLE)
    blank = np.zeros(img.shape, dtype='uint8')
    cv.drawContours(blank, contours, -1, (0,0,255), 1)
    # cv.imshow('blank', blank)
    return contours, hierarchies

gray = cv.cvtColor(img, cv.COLOR_BGR2GRAY)
# cv.imshow('Gray', gray)

def img_processing(img):
#Simple Thresholding applied
#Simple or Adaptive ? - Check which will be better...
    threshold, thresh = cv.threshold(img, 140, 255, cv.THRESH_BINARY)

# cv.imshow('Simple Threshold', thresh)
#!!!!!!!       EDGE DETECTION ON IMAGE BINARIZED USING SIMPLE APPROACH          !!!!!!!!!!!
# Laplacian
    lap1 = cv.Laplacian(thresh, cv.CV_64F)
    lap1 = np.uint8(np.absolute(lap1))
# cv.imshow('Laplacian1', lap1)

# Sobel 
    sobelx1 = cv.Sobel(thresh, cv.CV_64F, 1, 0)
    sobely1 = cv.Sobel(thresh, cv.CV_64F, 0, 1)
    combined_sobel1 = cv.bitwise_or(sobelx1, sobely1)

# cv.imshow('Combined Sobel1', combined_sobel1)

    canny1 = cv.Canny(thresh, 150, 175)

    return lap1


#lap1 = img_processing(img)
# cv.imshow('Canny1', canny1)
#img_innit = fillhole(lap1, img)
# contours, hierarchies = findcontours(out_img)
# roi = saving_elements(out_img, contours)  
# BEST RESULT IS BEING GIVEN BY THE LAPLACIAN OF SIMPLY THRESHOLDED RESULT.
# PARAMETERS NEED TO BE FINE-TUNED...
# todo:
def ui_extract(request) :
    # from ast import main
# from .main_prog import my_dict
# from .main_prog import my_dict
    print("chala")
    # print(my_dict)
    # cv.imshow("IMAGE",img)
    # my_dict = {}
    # img = cv.imread('yo44.png')              #PUT IN INPUT IMAGE NAME HERE...
    rgb = cv.cvtColor(img, cv.COLOR_BGR2RGB)
    lap1 = img_processing(img)
    img_innit = fillhole(lap1, img)
    gray =  cv.cvtColor(img_innit, cv.COLOR_BGR2GRAY)
    blurred = cv.GaussianBlur(gray, (11, 11), 0)
    # cv.imshow('gray', gray)
    # cv.imshow('img_innit', img_innit)
    # cv.imshow('blurred', blurred)
    #Threshold the image to reveal light regions in the blurred image.

    thresh = cv.threshold(blurred, 80, 255, cv.THRESH_BINARY)[1]
    # cv.imshow('Threshold', thresh)
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
    print("SAHIL")

    file_t.close()
    print("SAHIL")

    # show the output image
    # cv.imshow("Image", img)
    print("SAHIL")

    cv.waitKey(1)
    print("SAHIL")

    f_prg = open("program.html", "w")
    f_prg.write("<HTML>\n")
    f_prg.write("<BODY>\n")
    # print("SAHIL")
    for i in reversed(my_dict) :
        print(i)
        if i == (254,0,0) :
            f_prg.write("\t<h1>This is Heading</h1>\n")
            components.append('h1')
        elif i == (255,139,0) :
            f_prg.write("\t<h2>This is Heading</h2>\n")
            components.append('h2')
        elif i == (154,205,50) :
            f_prg.write("\t<h3>This is Heading</h3>\n")
            components.append('h3')
        elif i == (32,178,170) :
            f_prg.write("\t<h4>This is Heading</h4>\n")
            components.append('h4')
        elif i == (100,149,237) :
            f_prg.write("\t<h5>This is Heading</h5>\n")
            components.append('h5')
        elif i == (219,112,147) :
            f_prg.write("\t<h6>This is Heading</h6>\n")
            components.append('h6')
        elif i == (255,0,254) :
            f_prg.write("\t<p>lorem*15</p>\n")
            components.append('paragraph')
        elif i == (0,255,0) :
            f_prg.write("\t<hr>")
            components.append('hr')
        elif i == (0,0,128) :
            f_prg.write("\t<a>Thisishyperlink.com</a>\n")
            components.append('anchor')
        elif i == (255,215,0) :
            f_prg.write("   <img src=\"image.jpg\" alt=\"Your face\" width=\"42\" height=\"42\">\n")
            components.append('anchor')
        elif i == (250,128,114) :
            f_prg.write("\t<ul>\n"
                                "\t\t<li style = \"float:left\"><a href=\"#home\">Home</a></li>\n"
                                "\t\t<li style = \"float:left\"><a href=\"#news\">News</a></li>\n"
                                "\t\t<li style = \"float:left\"><a href=\"#contact\">Contact</a></li>\n"
                                "\t\t<li style = \"float:left\"><a href=\"#about\">About</a></li>\n"
                            "\t</ul>")
            components.append('navbar')
        elif i == (127,255,212) :
            f_prg.write("\t<table style=\"width:100%\">\n"
                            "\t\t<tr>\n"
                            "\t\t<th style=\"border:1px solid black\">Person 1</th>\n"
                            "\t\t<th style=\"border:1px solid black\">Person 2</th>\n"
                            "\t\t<th style=\"border:1px solid black\">Person 2</th>\n"
                            "\t\t</tr>\n"
                            "\t\t<tr>\n"
                            "\t\t<td style=\"border:1px solid black\">Billy</td>\n"
                            "\t\t<td style=\"border:1px solid black\">Gilly</td>\n"
                            "\t\t<td style=\"border:1px solid black\">Silly</td>\n"
                            "\t\t</tr>\n"
                            "\t\t<tr>\n"
                            "\t\t<td style=\"border:1px solid black\">16</td>\n"
                            "\t\t<td style=\"border:1px solid black\">14</td>\n"
                            "\t\t<td style=\"border:1px solid black\">12</td>\n"
                            "\t\t</tr>\n"
                            "\t\t</table>)\n")
            components.append('table')
        elif i == (127,255,0) :
            f_prg.write("\t<button type=\"button\">Click Me!</button>\n")
            components.append('button')
        elif i == (88,88,88) :
            f_prg.write("\t<label for=\"cars\">Choose a car:</label>\n"
                        "\t\t<select>\n"
                        "\t\t<option value=\"option1\">Option A</option>\n"
                        "\t\t<option value=\"option2\">Option B</option>\n"
                        "\t\t<option value=\"option3\">Option C</option>\n"
                        "\t\t<option value=\"option4\">Option D</option>\n"
                        "\t\t</select>\n")
            components.append('select')
    print(components) 
    print("tags")
    f_prg.write("</BODY>\n")
    f_prg.write("</HTML>\n")
    f_prg.close()
    return HttpResponse("heslj")


