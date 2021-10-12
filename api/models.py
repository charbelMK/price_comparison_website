from . import db

class Jumia(db.Model):
    category = db.Column(db.String)
    name = db.Column(db.String)
    price = db.Column(db.String)
    product_url = db.Column(db.String, primary_key=True)
    img_url = db.Column(db.String)