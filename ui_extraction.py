import cv2 as cv
import numpy as np
from matplotlib import pyplot as plt
img = cv.imread('yo44.png')
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
    cv.imshow('blank', blank)
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
