from django.db import models
from django.contrib.auth.models import User

class Dashboard(models.Model):
    pass

class Production(models.Model):
    pass

class Summary(models.Model):
    pass

class Sex(models.Model):
    sex_name = models.CharField(max_length=100)

class SexUser(models.Model):
    sex = models.ForeignKey(Sex, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

class Insurance(models.Model):
    date = models.DateTimeField()
    certificate_number = models.CharField(max_length=255)
    policy_number = models.CharField(max_length=255)
    insured = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    phone = models.CharField(max_length=255)
    period = models.CharField(max_length=255)
    insurance_type = models.CharField(max_length=255)
    premium = models.DecimalField(max_digits=10, decimal_places=0)
    deposit = models.DecimalField(max_digits=10, decimal_places=0)
    balance = models.DecimalField(max_digits=10, decimal_places=0)
    payement_method = models.CharField(max_length=50)
    designation = models.CharField(max_length=255)

class Disbursement(models.Model):
    date = models.DateTimeField()
    amount = models.DecimalField(max_digits=10, decimal_places=0)

class Health(models.Model):
    registration_number = models.CharField(max_length=255)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    company = models.CharField(max_length=255)
    status = models.CharField(max_length=50)
    disbursement = models.ForeignKey(Disbursement, on_delete=models.CASCADE)

class Car(models.Model):
    claim_number = models.CharField(max_length=255)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    designation = models.CharField(max_length=255)
    policy_number = models.CharField(max_length=255)
    payement_method = models.CharField(max_length=50)
    disbursement = models.ForeignKey(Disbursement, on_delete=models.CASCADE)

class Journey(models.Model):
    registration_number = models.CharField(max_length=255)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    disbursement = models.ForeignKey(Disbursement, on_delete=models.CASCADE)

class SmallCrate(models.Model):
    designation = models.CharField(max_length=255)
    disbursement = models.ForeignKey(Disbursement, on_delete=models.CASCADE)
    
class Insured(models.Model):
    responsible = models.CharField(max_length=255)
    insured = models.CharField(max_length=255)
    registration_number = models.CharField(max_length=150)
    prime = models.DecimalField(max_digits=10, decimal_places=0)
    status = models.CharField(max_length=150,default='Assuré')

class Provider(models.Model):
    responsable = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    type = models.CharField(max_length=150)

class PrimeAssurance(models.Model):
    date_emission = models.DateField()
    date_fin = models.DateField()
    prime = models.DecimalField(max_digits=10, decimal_places=0)
    responsible = models.CharField(max_length=255)

class InvoiceHealth(models.Model):
    date = models.DateField()
    invoice_number = models.CharField(max_length=150)
    registration_number = models.CharField(max_length=150)
    agency = models.CharField(max_length=255)
    month = models.CharField(max_length=50)
    responsible = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    insured = models.CharField(max_length=255)
    provider = models.CharField(max_length=255)
    amount_th = models.DecimalField(max_digits=10, decimal_places=0)
