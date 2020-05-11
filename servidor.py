# -*- coding: utf-8 -*-
"""
Created on Sun May  3 12:31:48 2020

@author: Ricardo Heredia

"""
from flask import Flask, render_template, request
import csv
import mysql.connector
from mysql.connector import Error
import smtplib
from email.message import EmailMessage 
from string import Template 
from pathlib import Path 

app = Flask(__name__)

@app.route('/')
def Principal():
    return render_template('index.html') 

@app.route('/Biblioteca')
def Biblioteca():
    return render_template('articles.html')

@app.route('/Inscripción')
def Inscripcion():
    return render_template('form.html')

@app.route('/Play')
def Play():
    return render_template('player.html')

@app.route('/Pricing')
def Procing():
    return render_template('pricing.html')


@app.route('/submit_form', methods=['POST', 'GET'])
def submit_form():
    if request.method == 'POST':
        data = request.form.to_dict()
        write_database_txt(data)
        # write_database_csv(data)
        store_data(data)
        Send_email(data)
        #print(data) #Mostar que datos estan ingresando los usuarios 
        return "Congratulations!! We're cheking your data"
        #return redirect('/thanks.html')
    else:
        #pass
        return 'something went wrong. Try Again!!'
    #render_template('login.html', error=error)''

def store_data(data):
   
    try:        
        connection = mysql.connector.connect(host='localhost',
                                    database='sharelive',
                                    user='root',
                                    password='RicardO123')
        nombre = data["firstName"]
        apellido = data["lastName"]
        telefono = data["cellphone"]
        usuario = data["username"]
        email = data["email"]
        insert_value = f"INSERT INTO sharelive.usuarios_inscritos (Nombre, Apellido,Telefono, Usuario, Email) VALUES ('{nombre}','{apellido}','{telefono}','{usuario}','{email}');"
        cursor = connection.cursor()
        cursor.execute(insert_value)
        connection.commit()
    
    except mysql.connector.Error as error:
        print("Failed to conexion in MySQL: {}".format(error))
    finally:
        if (connection.is_connected()):
            cursor.close()
            connection.close()
            print("MySQL connection is closed")

def write_database_txt(data):
    with open('database.txt', mode='a') as database:
        nombre = data["firstName"]
        apellido = data["lastName"]
        telefono = data["cellphone"]
        usuario = data["username"]
        email = data["email"]
        database.write(f'\n{nombre},{apellido},{telefono},{usuario},{email}')
        
def Send_email(data):
    html = Template(Path('Index.html').read_text())
    email = EmailMessage()
    email['from'] = 'ShareLive'
    email['to'] = data["email"]
    email['subject'] = '¡BIENVENIDO!'
    email.set_content(html.substitute({'name': data["firstName"]}), 'html')
    
    #Escogemos el Host desde donde vamos a enviar correos 
    with smtplib.SMTP(host = 'smtp.gmail.com', port = 587 ) as smtp:
        # Hello word protocol for know if the conexion is ok 
        smtp.ehlo()
        #Activate the encription mechanisim 
        #You wanna connect security wuth the server 
        smtp.starttls()
        smtp.login('bysharelive@gmail.com','JJ1GC2r3')
        smtp.send_message(email)
        print('All fine winner')



