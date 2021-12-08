package bussiness;

import java.io.IOException;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import data.*;
import model.*;

@WebServlet("/AddProduct")

public class AddProduct extends HttpServlet{
    @Override
    public void doGet (HttpServletRequest request, HttpServletResponse response) throws IOException
    {
        String name = request.getParameter("name");
        String description = request.getParameter("description");
        int quantity = Integer.parseInt(request.getParameter("quantity"));
        int price = Integer.parseInt(request.getParameter("price"));
        String edition = request.getParameter("edition");
        String imagename = request.getParameter("imagename");
        String included = request.getParameter("included");

        try {
            AnimeProduct product = new AnimeProduct();
            product.setName(name);
            product.setDescription(description);
            product.setQuantity(quantity);
            product.setPrice(price);
            product.setEdition(edition);
            product.setImageName(imagename);
            product.setIncluded(included);
            ProductDAO.insert(product);
            response.sendRedirect("HomeController");
        } catch (Exception e) {
            
        }
    }
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException
    {
        doGet(request, response);
    }
    
}
