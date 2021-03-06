<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page isELIgnored="false"%>
<!DOCTYPE html>
<html>

<head>
    <%-- <meta charset="UTF-8">
    <link href="https://fonts.googleapis.com/css?family=DM+Sans&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Inter&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.6.0/font/bootstrap-icons.css"
        integrity="sha384-7ynz3n3tAGNUYFZD3cWe5PDcE36xj85vyFkawcF6tIwxvIecqKvfwLiaFdizhPpN" crossorigin="anonymous">
    <link class="icon" rel="shortcut icon" type="image/png" href="./picSource/icon2.png" /> --%>
    <link rel="stylesheet" href="./style/reset.css">

    <link rel="stylesheet" href="./style/clientStyle.css">
    <link rel="stylesheet" href="./style/viewStyle.css">
    <title id="reference"></title>
     <%@ include file="./includes/global.html"%> 

    
</head>

<body style="background-image: url('./picSource/wallpaper.gif');background-repeat:repeat; background-size: 100%; ">
    <div class="containerView">
      <!-- add -->
      <div class="headerPlate">
        <div class="v56_574">
            <span class="v4_735"> Wibu World</span>
            <span class="logoClient"></span>
        </div>
        <div class="v4_736">
            <div class="v4_737"></div>
        </div>
        <div class="v37_595">
            <div class="v37_596">
                <div class="name"></div>
            </div>
        </div>
    </div>
    
    <%@ include file="./includes/header.html"%> d
    <div id="view-plate">
      
        <div id="poster"><img class="poster" src="poster/${product.getImageName()}" type="submit" alt="${product.getImageName()}"></div>
        <div id="info">
            
            <div id="animeTitle"class="text-info">
                <div class="normal">
                    Name:
                </div>
                <div id="name">
                    "${product.getName()}"
                </div> 
            </div><br>
            
            <div id="animeDescribe"class="text-info">
                <div class="normal">
                    Describe: 
                </div>
                <div id="describe">
                    ${product.getDescription()}
                </div>
            </div><br>
            
            <div id="animeEpisode"class="text-info">
                <div class="normal">Edition:

                </div>
                <div id="episode">
                  ${product.getEdition()}
               
                </div> 
            </div><br>
            
            <div id="animeRating"class="text-info">
                <div class="normal">
                    Included
                </div>
                <div id="rate">
                    ${product.getIncluded()}
                </div>
            </div><br>
            
            <div id="animeCost"class="text-info">
                <div class="normal">
                    Cost:
                </div>
                <div id="cost">
                    ${product.getPriceCurrencyFormat()}
                </div>
            </div><br>
            
        
        </div>
    </div>
    <form action="CartController" method="post">
        <input type="hidden" name="action" value="add">
        <input type="hidden" name="product_id" value="${product.getID()}">
        <input type="hidden" name="line_quantity" value="1">
        <input type="hidden" name="url" value="${pageContext.request.contextPath}/cart.jsp">
        <button class="fancy" type="submit" >       
                <span class="top-key"></span>
                <span class="text-buton" type="submit">Add to cart</span>
                <span class="bottom-key-1"></span>
                <span class="bottom-key-2"></span>
        </button>
    </form>

    <form action="DeleteProduct" method="post" >
        <input type="hidden" name="product_id" value="${product.getID()}">
        <button type="submit" class="del-prod">Delete Product</button>
    </form>
</body>

</html>