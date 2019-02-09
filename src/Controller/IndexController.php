<?php

namespace App\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Entity\Product;

class IndexController extends AbstractController
{
     /**
      * @Route("/", name="index")
      */
    public function index()
    {
        return $this->render('main/index.html.twig');
    }

     /**
      * @Route("/products", name="products")
      */
    public function products()
    {
        $em = $this->getDoctrine()->getManager();

        $productsRepository = $em->getRepository(Product::class);

        $products = $productsRepository->findAll();

        return $this->render('main/products.html.twig', [
            'products' => $products
        ]);
    }
}