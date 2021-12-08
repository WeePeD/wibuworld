package controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import data.ProductDAO;
import model.*;

@WebServlet("/DetailController")
public class DetailController extends HttpServlet {
    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
    {
       doPost(request, response);
    }

    @Override
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
    {
        
            int id = Integer.parseInt(request.getParameter("product_id"));
            AnimeProduct product = ProductDAO.selectProduct(id);
            HttpSession session = request.getSession();
            session.setAttribute("product", product);
            getServletContext().getRequestDispatcher("/view.jsp").forward(request, response);
           
    }   
}
