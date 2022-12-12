package com.imprevisible.mabcreation.controllers;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import com.imprevisible.mabcreation.dao.ProductRepository;
import com.imprevisible.mabcreation.entities.Product;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Optional;

@CrossOrigin("*")
@RestController
public class CatalogueRestController {
    private ProductRepository productRepository;

    public CatalogueRestController(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }
    
    @DeleteMapping("/deleteProduct/{id}")
	public void deleteArticles(@PathVariable (value="id") Long id) {
		Optional<Product> prod = productRepository.findById(id);
		if (prod.isPresent()) {
			Product produ= prod.get();
			productRepository.delete(produ);
		}
	}
	
	@PostMapping("/addProduct")
	public Product saveProduct(@RequestBody Product prod) {
		return productRepository.save(prod);
	}
	
	@PutMapping("/updateProduct/{id}")
	public Product updateProduit(@PathVariable(value="id") Long id, @RequestBody Product newProduct) {
		Optional<Product> prod = productRepository.findById(id);
		if (prod.isPresent()) {
			Product produit = prod.get();
			produit.setId(newProduct.getId());
			produit.setName(newProduct.getName());
			produit.setDescription(newProduct.getDescription());
			produit.setCurrentPrice(newProduct.getCurrentPrice());
			produit.setPromotion(newProduct.isPromotion());
			produit.setSelected(newProduct.isSelected());
			produit.setAvailable(newProduct.isAvailable());
			produit.setPhotoName(newProduct.getPhotoName());
			produit.setQuantity(newProduct.getQuantity());
			return productRepository.save(produit);
		}
		else {
			return null;
		}
	}
    
    @GetMapping(path="/photoProduct/{id}",produces = MediaType.IMAGE_PNG_VALUE)
    public byte[] getPhoto(@PathVariable("id") Long id) throws Exception{
        Product p=productRepository.findById(id).get();
        return Files.readAllBytes(Paths.get(System.getProperty("user.home")+"/ecom/products/"+p.getPhotoName()));
    }
    @PostMapping(path = "/uploadPhoto/{id}")
    public void uploadPhoto(MultipartFile file, @PathVariable Long id) throws Exception{
       Product p=productRepository.findById(id).get();
       p.setPhotoName(file.getOriginalFilename());
       Files.write(Paths.get(System.getProperty("user.home")+"/ecom/products/"+p.getPhotoName()),file.getBytes());
       productRepository.save(p);
    }
}