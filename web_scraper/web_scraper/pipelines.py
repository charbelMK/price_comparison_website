# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
from itemadapter import ItemAdapter
import sqlite3

class WebScraperPipeline:
    def __init__(self):
        self.conn = sqlite3.connect('database.db')
        self.cur = self.conn.cursor()
        self.create_table()

    def create_table(self):
        self.cur.execute("""CREATE TABLE IF NOT EXISTS products(
            category TEXT,
            name TEXT,
            price TEXT,
            product_link TEXT PRIMARY KEY,
            img_link TEXT)""")

    def process_item(self, item, spider):
        self.cur.execute("""INSERT OR IGNORE INTO products VALUES(?,?,?,?,?)""",
        ( item['category'], item['name'], item['price'], item['product_link'], item['img_link'] ))
        self.conn.commit()
        return item
