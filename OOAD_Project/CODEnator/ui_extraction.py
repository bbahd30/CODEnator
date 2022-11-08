import cv2 as cv
import numpy as np
from matplotlib import pyplot as plt

def fillhole(input_image, img):
    filedir = "CODEnator"
    im_flood_fill = input_image.copy()
    h, w = input_image.shape[:2]
    mask = np.zeros((h + 2, w + 2), np.uint8)
    im_flood_fill = im_flood_fill.astype("uint8")
    #The parameters for the flood-fill algorithm are referenced from the R&D team report at AliBabaTech.
    #These parameters were a result of fine-tuning and experimentation.
    cv.floodFill(im_flood_fill, mask, (0, 0), (255, 255, 255), (100, 100, 100), (50, 50, 50), cv.FLOODFILL_FIXED_RANGE)

    im_floodfill_inv = cv.bitwise_not(im_flood_fill)

    img_out = input_image | im_floodfill_inv
    #The threshold method of opencv takes in a grayscale image as input, as thresholding is applicable on a binary color channel.
    gray = cv.cvtColor(img_out, cv.COLOR_BGR2GRAY)

    threshold, thresh = cv.threshold(gray, 140, 255, cv.THRESH_BINARY)


    img_innit = cv.bitwise_and(img, img, mask = gray)
    
    return img_innit



def findcontours(input_image):
    contours, hierarchies = cv.findContours(input_image, cv.RETR_LIST, cv.CHAIN_APPROX_SIMPLE)
    blank = np.zeros(input_image.shape, dtype='uint8')
    cv.drawContours(blank, contours, -1, (0,0,255), 1)
    cv.imshow('blank', blank)
    return contours, hierarchies


def img_processing(img):
    #Simple Thresholding applied
    threshold, thresh = cv.threshold(img, 140, 255, cv.THRESH_BINARY)

    # Laplacian method of edge detection applied.
    lap1 = cv.Laplacian(thresh, cv.CV_64F)
    lap1 = np.uint8(np.absolute(lap1))      

    return lap1
