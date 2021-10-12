import scrapy


class JamboShoppeSpider(scrapy.Spider):
    name = 'jambo_shoppe'
    allowed_domains = ['jamboshop.com/']
    start_urls = ['https://www.jamboshop.com/']

    def parse(self, response):
        pass
