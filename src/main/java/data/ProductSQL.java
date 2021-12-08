package data;

import java.util.Properties;
import org.hibernate.SessionFactory;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.cfg.Configuration;
import org.hibernate.cfg.Environment;
import org.hibernate.service.ServiceRegistry;
import model.*;

public class ProductSQL {
    private static SessionFactory sessionFactory;

    public static SessionFactory getSessionFactory() 
    {
        if (sessionFactory == null) {
            Configuration configuration = new Configuration();
            try {
                
                Properties settings = new Properties();
                // settings.put(Environment.DRIVER, "com.microsoft.sqlserver.jdbc.SQLServerDriver");
                // settings.put(Environment.URL, "jdbc:sqlserver://localhost;databaseName=UserTest");
                // settings.put(Environment.USER, "sa");
                // settings.put(Environment.PASS, "huynhcongdat123");

                settings.put(Environment.DIALECT, "org.hibernate.dialect.PostgreSQLDialect");
                settings.put(Environment.DRIVER, "org.postgresql.Driver");
                settings.put(Environment.URL, "jdbc:postgresql://ec2-34-233-214-228.compute-1.amazonaws.com:5432/dej4kkluukeaj7");
                settings.put(Environment.USER, "ocguyanqqxeazq");
                settings.put(Environment.PASS, "3269d76d5bacf8e2350c75c105487776a53ee4b45a30cd0c5d59f1c70398470f");
                settings.put(Environment.HBM2DDL_AUTO, "update");

                settings.put(Environment.SHOW_SQL, "true");

                settings.put(Environment.CURRENT_SESSION_CONTEXT_CLASS, "thread");

                configuration.setProperties(settings);
                configuration.addAnnotatedClass(AnimeProduct.class);

                ServiceRegistry serviceRegistry = new StandardServiceRegistryBuilder()
                        .applySettings(configuration.getProperties()).build();
                System.out.println("Hibernate Java Config serviceRegistry created");
                sessionFactory = configuration.buildSessionFactory(serviceRegistry);
                return sessionFactory;

            } catch (Exception e) {
                System.out.println("can't connect to DB");
                System.out.println(e);
            }
        }
        return sessionFactory;
    }
}
