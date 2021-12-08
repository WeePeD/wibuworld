package bussiness;

import java.io.IOException;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


import data.ProductDAO;
import model.AnimeProduct;

@WebServlet("/DeleteProduct")
public class DeleteProduct extends HttpServlet {
    @Override 
    public void doGet (HttpServletRequest request, HttpServletResponse response) throws IOException
    {
        AnimeProduct product = new AnimeProduct();
        int id = Integer.parseInt(request.getParameter("product_id"));
        product = ProductDAO.selectProduct(id);
        try {
            ProductDAO.delete(product);
            response.sendRedirect("HomeController");
        } catch (Exception e) {
            
        }
    }
    public void doPost (HttpServletRequest request, HttpServletResponse response) throws IOException
    {
        doGet(request, response);
    }
    
    
}
