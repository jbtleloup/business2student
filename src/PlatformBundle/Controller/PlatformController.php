<?php

namespace PlatformBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class PlatformController extends Controller
{
    public function indexAction()
    {
        return $this->render('PlatformBundle::index.html.twig');
    }
}
