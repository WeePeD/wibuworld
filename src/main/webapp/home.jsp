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
    <link class="icon" rel="shortcut icon" type="image/png" href="./picSource/icon2.png" />
    <link rel="stylesheet" href="./style/reset.css">--%>
    
    <link href="./style/clientStyle.css" rel="stylesheet" /> 
    <%@ include file="./includes/global.html"%> 
    <title>WibuWorld</title>
</head>

<body style="background-image: url('./picSource/wallpaper.gif');background-repeat:repeat; background-size: 100%; ">
    <div class="container">

        
         <%@ include file="./includes/header.html"%> 

        <div class="v4_722 ">

            <div style="background-color: rgb(51, 48, 48);">
                <p class="text-type">Recommend</p>
            </div>
            <div class="slideshow-container">
                <slider>
                </slider>
            </div>

            <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
            <a class="next" onclick="plusSlides(1)">&#10095;</a>

            <br>

            <div style="text-align:center; margin-top: 10px;">
                <span class="dot" onclick="currentSlide(1)"></span>
                <span class="dot" onclick="currentSlide(2)"></span>
                <span class="dot" onclick="currentSlide(3)"></span>
                <span class="dot" onclick="currentSlide(4)"></span>
                <span class="dot" onclick="currentSlide(5)"></span>

            </div>
        </div>
        <div class="movie-plate">
            <p class="text-type">Update</p>
            <div class="movie-list">
                <c:forEach var = "animeproduct" items="${product_list}">
                    <form action="DetailController" method="get">
                        <input type="hidden" name="action" value="detail">
                        <input type="hidden" name="product_id" value="${animeproduct.getID()}">
                        <button type="submit"   style="background-color: transparent; border: none; ">
                            <div id="1" class="movie-component">
                            <img class="poster" src="poster/${animeproduct.getImageName()}" type="submit" alt="${animeproduct.getImageName()}">
                                
                            <div class="text-title" type="submit">${animeproduct.getName()}</div>
                            <div class="cost text-title">${animeproduct.getPriceCurrencyFormat()}</div>
                            </div>
                        </button>
                    </form>
                </c:forEach>
            </div>
        </div>
        
        
        
        <div class="v4_1005">
            <div class="v4_1006">
                <img id="imgFoot" src="./picSource/3BBF.gif">
            </div>
            <div class="v4_1007"></div>
           
           
           
            <div class="v4_1008">
                <div class="v4_1009">
                    <div class="name"></div><span class="v4_1011">Ho Chi Minh City, Viet Nam</span>
                </div>
                <div class="v4_1012">
                    <a href="mailto:WibuWorld.entertainment@gmail.com">
                        <div class="name"></div><span class="v4_1014">WibuWorld.entertainment@gmail.com </span>
                    </a>
                </div>
            </div>

            <div class="v4_1033"><span class="v4_1034">Enjoy your favorite anime with your waifu.</span>
                <div class="v4_1035">
                    <div class="v4_1036"></div><span class="v4_1037">Insert your mail here</span>
                    <div class="v4_1038">
                        <div class="v4_1039"></div>
                        <div class="v4_1040">
                            <div class="v4_1041"></div>
                            <div class="name"></div>
                        </div>
                    </div>
                </div><span class="v4_1043">Join New Wibu</span><span class="v4_1044">Wibu World</span>
            </div>
        </div>

    </div>
</body>

<footer>
    <script type="text/javascript" src="./script/database.js"></script>
    <script type="text/javascript" src="./script/main.js"></script>

</footer>

</html>