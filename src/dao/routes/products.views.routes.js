import { Router } from 'express'
import { ProductController } from '../controllers/product.controller.js'
import {UserController} from '../controllers/user.controller.js'

const router = Router()
const controller = new ProductController()
const userController = new UserController()


router.get('/products', async (req, res) => {

    const { limit, page, sort } = req.query;
    if (req.session.user) {
        try {
            const productsData = await controller.getProducts(limit, page, sort);

            res.render('products', {
                title: 'Listado de Productos',
                rutaJs: 'products',
                products: productsData.products,
                totalProducts: productsData.total,
                totalPages: productsData.pages,
                currentPage: productsData.currentPage
            });
        } catch (err) {
            res.status(500).render('error', {
                message: 'Error al obtener productos',
                error: { status: 500 }
            });
        }
    } else {
        res.redirect('/login')
    }
});

router.get('/login', async (req, res) => {
   
    if (req.session.user) {
        res.redirect('/profile')
    } else {
        res.render('login', { showNavbar: false })
    }
})




export default router