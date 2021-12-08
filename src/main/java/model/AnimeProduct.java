package model;

import java.text.NumberFormat;
import java.util.Locale;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import java.io.Serializable;

@Entity
@Table(name = "AnimeProduct")
public class AnimeProduct implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")

    private int id;
    private String name;
    private String description;
    private String edition;
    private int quantity;
    private float price;
    private String imageName;
    private String included;

    public AnimeProduct()
    {
        super();
        name = "";
        description = "";
        edition ="";
        quantity = 0;
        price = 0;
        imageName = "";
        included = "";
    }
    
    public AnimeProduct (int id, String name,String description, String edition, int quantity, float price,String imageName, String included )
    {
        super();
        this.id=id;
        this.name=name;
        this.description=description;
        this.edition=edition;
        this.quantity=quantity;
        this.price=price;
        this.imageName=imageName;
        this.included=included;
    }
    public void setID(int id) 
    {
        this.id = id;
    }

    public int getID()
    {
        return this.id;
    }

    public void setName(String name) 
    {
        this.name = name;
    }

    public String getName()
    {
        return this.name;
    }

    public void setDescription(String description) 
    {
        this.description = description;
    }

    public String getDescription() 
    {
        return this.description;
    }

    public void setEdition(String edition) 
    {
        this.edition = edition;
    }

    public String getEdition() 
    {
        return this.edition;
    }

    public void setQuantity(int quantity) 
    {
        this.quantity = quantity;
    }

    public int getQuantity() 
    {
        return this.quantity;
    }

    public void setPrice(float price)
    {
        this.price = price;
    }

    public float getPrice() 
    {
        return this.price;
    }

    public String getImageName() 
    {
        return this.imageName;
    }

    public void setImageName(String imageName) 
    {
        this.imageName = imageName;
    }

    public String getIncluded()
    {
        return this.included;
    }
    public void setIncluded(String included)
    {
        this.included = included;
    }
    public String getPriceCurrencyFormat() {
        NumberFormat currency = NumberFormat.getCurrencyInstance(Locale.US);
        return currency.format(price);
    }
}
