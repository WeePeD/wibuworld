package model;

import java.io.Serializable;
import java.util.ArrayList;
import java.text.NumberFormat;
import java.util.Locale;




public class Cart implements Serializable{
    private ArrayList<LineItem> items;

    public Cart()
    {
        items = new ArrayList<LineItem>();
    }
    
    public ArrayList<LineItem> getItems()
    {
        return items;
    }
    public int getCount()
    {
        return items.size();
    }
    public double getTotal()
    {
        double total = 0;
        for (LineItem item : this.items)
        {
            total += item.getTotal();
        }
        return total;
    }

    public String getTotalCurrencyFormat() 
    {
        NumberFormat currency = NumberFormat.getCurrencyInstance(Locale.US);
        return currency.format(this.getTotal());
    }

    public void addItem(LineItem item)
    {
        int id = item.getAnimeProduct().getID();
        int quantity = item.getQuantity();
        for (int i = 0; i< items.size();i++)
        {
            LineItem lineItem = items.get(i);
            if (lineItem.getAnimeProduct().getID() == id)
            {
                lineItem.setQuantity(quantity);
                return;
            }
        }
        items.add(item);
    }

    public void removeItem(LineItem item)
    {
        int id = item.getAnimeProduct().getID();
        for (int i=0; i< items.size();i++)
        {
            LineItem lineItem = items.get(i);
            if (lineItem.getAnimeProduct().getID()==id)
            {
                items.remove(i);
                return;
            }
        }
    }

    public void clear ()
    {
      
       items.clear();
        
    }

}
