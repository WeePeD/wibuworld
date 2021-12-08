package model;

import java.io.Serializable;
import java.text.NumberFormat;
import java.util.Locale;

public class LineItem implements Serializable {
    private AnimeProduct animeProduct;
  
    private int quantity;
    
    public LineItem()
    {

    }

    public void setAnimeProduct(AnimeProduct a)
    {
        this.animeProduct=a;
    }
    public AnimeProduct getAnimeProduct() 
    {
        return this.animeProduct;
    }
    public void setQuantity(int quantity)
    {
        this.quantity = quantity;
    }
    public int getQuantity()
    {
        return this.quantity;
    }
    public double getTotal()
    {
        double total = quantity * animeProduct.getPrice();
        return total;
    }

    public String getTotalCurrencyFormat()
    {
        NumberFormat currency = NumberFormat.getCurrencyInstance(Locale.US);
        return currency.format(this.getTotal());
    }

    
    
}
