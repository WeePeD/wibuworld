<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page isELIgnored="false"%>
<!DOCTYPE html>
<html lang="en">

<head>
  
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style type="text/stylesheet" src="./"></style>
    <link class="icon" rel="shortcut icon" type="image/png" href="./picSource/icon2.png" />
    <link href="./style/checkout.css" rel="stylesheet" />
    <title>Check out</title>
</head>

<body>
    <div class="container">
        <div class="title">Check out</div>
        <div class="checkout-plate">
           <table>
             <tr>
               <th></th>
               <th>Product</th>
               <th>Name</th>
               <th>Edition</th>
               <th>Price</th>
               <th>Quantity</th>
               <th>Total</th>
             </tr>
             <c:forEach var="item" items="${cart.getItems()}">
                <tr>
                  <td>
                    <form action="CartController" method="post">
                      <input type="hidden" name="action" value="remove">
                      <input type="hidden" name="line_quantity" value="0">
                      <input type="hidden" name="product_id" value="<c:out value='${item.getAnimeProduct().getID()}'/>">
                      <input type="hidden" name="url" value="${pageContext.request.contextPath}/cart.jsp">
                      <button class="button-table" type="submit">Delete</button>
                    </form>
                  </td>

                  <td>
                    <a href="home.jsp">
                    <img width="145" height="145" src="./poster/${item.getAnimeProduct().getImageName()}" alt="" srcset="">
                    </a>
                  </td> 
                  
                  <td>
                    ${item.getAnimeProduct().getName()}
                  </td>
                  
                  <td>
                    ${item.getAnimeProduct().getEdition()}
                  </td>
                  
                  <td>
                    ${item.getAnimeProduct().getPriceCurrencyFormat()}
                  </td> <!--thay doi gia tri bang code-->

                  <td>
                    <form action="CartController" method="post">
                      <input type="hidden" name="action" value="update">
                      <input type="hidden" name="product_id" value="<c:out value='${item.getAnimeProduct().getID()}'/>">
                      <input type="hidden" name="url" value="${pageContext.request.contextPath}/cart.jsp">

                      <input type="number" style="width: 60px; text-align: center; margin-bottom: 10px;" name="line_quantity" value="<c:out value='${item.getQuantity()}'/>" min="1" step="1">
                      <input class="button-table" type="submit" value="Update">
                    </form> 
                  </td>
                  
                  <td>
                    ${item.getTotalCurrencyFormat()}
                  </td> <!--thay doi gia tri bang code-->

                </tr>
              </c:forEach>
           
           </table>
           <!-- button check out -->
           <form action="CartController" method="post">
            <input type="hidden" name="action" value="checkout">
            <button class="cta" type="submit" onclick="location.href='./thank.html'">
                <span class="hover-underline-animation"> Buy now </span>
                <svg id="arrow-horizontal" xmlns="http://www.w3.org/2000/svg" width="30" height="10" viewBox="0 0 46 16">
                  <path id="Path_10" data-name="Path 10" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" transform="translate(30)"></path>
                </svg>
            </button>
          </form>
        </div>
        <!-- button continue shopping -->
        <button class="button-back" onclick="location.href='./home.jsp'">
            <div class="svg-wrapper-1">
              <div class="svg-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                </svg>
              </div>
            </div>
            <span>Continue shopping</span>
          </button>
    </div>
</body>

</html>
