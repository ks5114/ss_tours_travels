<?php
class Welcome extends CI_controller
{
    /**
     * This is default constructor of the class
     */
    public function __construct()
    {
        parent::__construct();
    }
    
    /**
     * This function used to load the first screen of the user
     */
    public function index()
    {
        
        $this->load->view("index");
    }
    public function home()
    {
        
        $this->load->view("index");
    }

    public function package(){
        $this->load->view("packages");
        
    }
    public function contact(){
        $this->load->view("index");
        
    }
}
    