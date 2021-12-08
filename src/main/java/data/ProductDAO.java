package data;

import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityTransaction;
import javax.persistence.NoResultException;
import javax.persistence.TypedQuery;

import model.AnimeProduct;

public class ProductDAO {

    public static void insert (AnimeProduct product)
    {
        EntityManager em = ProductSQL.getSessionFactory().createEntityManager();
        EntityTransaction trans = em.getTransaction();
        trans.begin();
        try {
            em.persist(product);
            trans.commit();
            System.out.println("Add success !");
        } catch (Exception e) {
            System.out.println("Add fail !");
            System.out.println(e);
            trans.rollback();
        }finally {
            em.close();
        }
    }
    
 

    public static AnimeProduct selectProduct(int id)
    {
        EntityManager em = ProductSQL.getSessionFactory().createEntityManager();
        String qString = "SELECT u FROM AnimeProduct u " + "WHERE u.id = :id";
        TypedQuery<AnimeProduct> q = em.createQuery(qString, AnimeProduct.class);
        q.setParameter("id", id);
        try {
            AnimeProduct product = q.getSingleResult();
            System.out.print("Select success !");
            return product;
        } catch (NoResultException e) {
            System.out.println("Select fail !");
            return null;    
        }finally{
            em.close();
        }  
    }
    public static List<AnimeProduct> selectAllProduct()
    {
        EntityManager em = ProductSQL.getSessionFactory().createEntityManager();
        String qString = "FROM AnimeProduct";
        TypedQuery<AnimeProduct> q = em.createQuery(qString, AnimeProduct.class);
        try {
            List<AnimeProduct> products = q.getResultList();
            System.out.println("Select success!!");
            return products;
        } catch (NoResultException e) {
            System.out.println("SelectAll fail!!!");
            return null;
        } finally {
            em.close();
        }
    }


    public static void delete(AnimeProduct product) {
        EntityManager em = ProductSQL.getSessionFactory().createEntityManager();
        EntityTransaction trans = em.getTransaction();
        trans.begin();
        try {
            em.remove(em.merge(product));
            trans.commit();
            System.out.println("Delete success!!");
        } catch (Exception e) {
            System.out.println("Delete fail!!");
            System.out.println(e);
            trans.rollback();
        } finally {
            em.close();
        }
    }
    
}
