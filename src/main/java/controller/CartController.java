package controller;

import java.io.IOException;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;


import data.ProductDAO;
import model.AnimeProduct;
import model.Cart;
import model.LineItem;

@WebServlet("/CartController")
public class CartController extends HttpServlet {
    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException
    {
        String action = request.getParameter("action");
        HttpSession session = request.getSession(false);
        
        Cart cart = (Cart) session.getAttribute("cart");
        if (cart == null)
        {
            cart = new Cart();
        }
        if (action.equals("checkout"))
        {
            cart.clear();
            response.sendRedirect("thank.html");
        }
        
        else{
        LineItem lineItem = new LineItem();
        String url = request.getParameter("url");
        int id = Integer.parseInt(request.getParameter("product_id"));
        
        AnimeProduct product = ProductDAO.selectProduct(id);
        
        
        int LineQuantity;
        try {
            LineQuantity = Integer.parseInt(request.getParameter("line_quantity"));
            if (LineQuantity < 0 )
            {
                LineQuantity = 1;
            }
        } catch (NumberFormatException e) {
            LineQuantity = 1;
        }
        
        lineItem.setAnimeProduct(product);
        lineItem.setQuantity(LineQuantity);
        if (LineQuantity > 0)
        {
            cart.addItem(lineItem);
        }
        if (LineQuantity == 0 || action.equals("remove"))
        {
            cart.removeItem(lineItem);
        }
        session.setAttribute("cart", cart);
        response.sendRedirect(url);
        }
        
    }

    @Override
    public void doPost(HttpServletRequest request, HttpServletResponse response ) throws IOException
    {
        doGet(request, response);
    }

    
}
