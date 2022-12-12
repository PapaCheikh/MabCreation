package com.imprevisible.mabcreation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import com.imprevisible.mabcreation.dao.CategoryRepository;
import com.imprevisible.mabcreation.dao.ProductRepository;
import com.imprevisible.mabcreation.entities.Category;
import com.imprevisible.mabcreation.entities.Product;

@SpringBootApplication
public class MabcreationApplication implements CommandLineRunner {
	@Autowired
    private ProductRepository productRepository;
    @Autowired
    private CategoryRepository categoryRepository;
    @Autowired
    private RepositoryRestConfiguration repositoryRestConfiguration;

	public static void main(String[] args) {
		SpringApplication.run(MabcreationApplication.class, args);
	}

	@SuppressWarnings("deprecation")
	@Override
	public void run(String... args) throws Exception {

        repositoryRestConfiguration.exposeIdsFor(Product.class,Category.class);

        categoryRepository.save(new Category("Vêtements", null, null));
        categoryRepository.save(new Category("Chaussures", null, null));
        categoryRepository.save(new Category("Montres", null, null));
        categoryRepository.save(new Category("Pochettes", null, null));
        
        productRepository.save(new Product("Vet1", "desc...", 300.9, true, false, true, "unknown.png", categoryRepository.getById(1L)));
        productRepository.save(new Product("Vet2", "desc...", 300.9, true, false, true, "unknown.png", categoryRepository.getById(1L)));
        productRepository.save(new Product("Vet3", "desc...", 300.9, true, false, true, "unknown.png", categoryRepository.getById(1L)));
        productRepository.save(new Product("Vet4", "desc...", 300.9, true, false, true, "unknown.png", categoryRepository.getById(1L)));
        productRepository.save(new Product("chauss1", "desc...", 300.9, true, false, true, "unknown.png", categoryRepository.getById(2L)));
        productRepository.save(new Product("chauss2", "desc...", 300.9, true, false, true, "unknown.png", categoryRepository.getById(2L)));
        productRepository.save(new Product("chauss3", "desc...", 300.9, true, false, true, "unknown.png", categoryRepository.getById(2L)));
        productRepository.save(new Product("chauss4", "desc...", 300.9, true, false, true, "unknown.png", categoryRepository.getById(2L)));
        productRepository.save(new Product("Montre1", "desc...", 300.9, true, false, true, "unknown.png", categoryRepository.getById(3L)));
        productRepository.save(new Product("Montre2", "desc...", 300.9, true, false, true, "unknown.png", categoryRepository.getById(3L)));
        productRepository.save(new Product("Montre3", "desc...", 300.9, true, false, true, "unknown.png", categoryRepository.getById(3L)));
        productRepository.save(new Product("Montre4", "desc...", 300.9, true, false, true, "unknown.png", categoryRepository.getById(3L)));
        productRepository.save(new Product("Poch1", "desc...", 300.9, true, false, true, "unknown.png", categoryRepository.getById(4L)));
        productRepository.save(new Product("Poch2", "desc...", 300.9, true, false, true, "unknown.png", categoryRepository.getById(4L)));
        productRepository.save(new Product("Poch3", "desc...", 300.9, true, false, true, "unknown.png", categoryRepository.getById(4L)));
        productRepository.save(new Product("Poch4", "desc...", 300.9, true, false, true, "unknown.png", categoryRepository.getById(4L)));
	}

}
