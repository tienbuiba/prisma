
import { PrismaClient } from "@prisma/client"
import { HttpStatus } from "../constants/httpStatus.constant.js";
import { ApiResponseCode } from "../constants/apiStatus.constant.js";
const prisma = new PrismaClient();


export const getAllProducts = async (req, res, next) => {
    try {
        const products = await prisma.product.findMany({
            include: {
                category: true
            }
        })

        const categories = await prisma.category.findMany({
            include: { products: true }
        })

        if (!products) {
            throw new BaseException(HttpStatus.NOT_FOUND, ApiResponseCode.DATABASE_ERROR, "Products not found!")
        }

        return res.status(HttpStatus.OK).send({
            status: ApiResponseCode.DATABASE_ERROR,
            message: 'successfully',
            data: products, categories
        })

    } catch (err) {
        next(error)
    }
}


export const getProductById = async (req, res, next) => {
    try {

    } catch (err) {

    }
}

export const createProduct = async (req, res, next) => {
  

    console.log(req.body)

    try {
        const product = await prisma.product.create({
            data: {
                name: req.body.name,
                price: req.body.price,
                categoryId: req.body.category
            }
        })

        console.log(product)

        return res.status(HttpStatus.CREATED).send({
            status: ApiResponseCode.SUCCESS,
            message: 'successfully',
            data: product
        })

    } catch (err) {
        next(err)
    }
}

export const deleteProduct = async (req, res, next) => {
    try {

    } catch (err) {

    }
}

export const updateProductById = async (req, res, next) => {
    try {

    } catch (err) {

    }
}

