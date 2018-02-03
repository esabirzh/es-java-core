package org.example.model;

import java.util.Date;

/**
 * Created by esabirzh on 1/3/18.
 */
public class Customer {
    private Long id;
    private String firstName;

    private String lastName;
    private String email;
    private String mobile;
    private Date dateOfBirth;

    public Date getDateOfBirth() {
        return dateOfBirth;
    }

    public Long getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmail() {
        return email;
    }

    public String getMobile() {
        return mobile;
    }


    public void setId(Long id) {
        this.id = id;
    }



    public Customer() {
    }

    public Customer(long id, String firstName, String lastName, String email, String mobile) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.mobile = mobile;
        this.dateOfBirth = new Date();
    }



}
