package com.imprevisible.mabcreation.entities;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@SuppressWarnings("serial")
@Entity
public class Commande implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name;
	private String email;
	private String address;
	private Integer phoneNumber;
	private String username;
	private Integer cardNumber;
	private Date expiration;
	private String cvv;
	private Date dateToday;
	
	public Commande() {
		super();
	}

	public Commande(String name, String email, String address, Integer phoneNumber, String username, Integer cardNumber,
			Date expiration, String cvv, Date dateToday) {
		super();
		this.name = name;
		this.email = email;
		this.address = address;
		this.phoneNumber = phoneNumber;
		this.username = username;
		this.cardNumber = cardNumber;
		this.expiration = expiration;
		this.cvv = cvv;
		this.dateToday = dateToday;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Number getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(Integer phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public Number getCardNumber() {
		return cardNumber;
	}

	public void setCardNumber(Integer cardNumber) {
		this.cardNumber = cardNumber;
	}

	public Date getExpiration() {
		return expiration;
	}

	public void setExpiration(Date expiration) {
		this.expiration = expiration;
	}

	public String getCvv() {
		return cvv;
	}

	public void setCvv(String cvv) {
		this.cvv = cvv;
	}

	public Date getDateToday() {
		return dateToday;
	}

	public void setDateToday(Date dateToday) {
		this.dateToday = dateToday;
	}

	@Override
	public String toString() {
		return "Commande [id=" + id + ", name=" + name + ", email=" + email + ", address=" + address + ", phoneNumber="
				+ phoneNumber + ", username=" + username + ", cardNumber=" + cardNumber + ", expiration=" + expiration
				+ ", cvv=" + cvv + ", dateToday=" + dateToday + "]";
	}
}
