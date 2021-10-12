import scrapy
from web_scraper.items import WebScraperItem
from scrapy.loader import ItemLoader


class JumiaSpider(scrapy.Spider):
    name = 'jumia'
    allowed_domains = ['jumia.co.ke']
    start_urls = ['https://www.jumia.co.ke/']
    

    def parse(self, response):
        for link in response.css('div.flyout a::attr(href)'):
            yield response.follow(link.get(), callback=self.parse_categories)

        

    def parse_categories(self, response):
        
        products = response.css('article.prd._fb.col.c-prd')
        for product in products:
            
            l = ItemLoader(item = WebScraperItem(), selector=product)

            l.add_css('category', 'a.core::attr(data-category)')
            l.add_css('name', 'h3.name')
            l.add_css('price', 'div.prc')
            l.add_css('product_link', 'a.core::attr(href)')
            l.add_css('img_link', 'img::attr(data-src)')
            
            '''
            item['category'] = product.css('a.core::attr(data-category)').get(),
            item['name'] = product.css('h3.name::text').get(),
            item['img-link'] = product.css('div.prc::text').get(), 
            item['product-link'] = product.css('a.core::attr(href)').get().replace('/','http://jumia.co.ke/'),
            item['img-link'] = product.css('img::attr(data-src)').get(),
            '''
            yield l.load_item()
            
        next_page = 'http://jumia.co.ke'+response.xpath('//*[@id="jm"]/main/div[2]/div[3]/section/div[2]/a[6]/@href').get()
        if next_page is not None:
            yield response.follow(next_page, callback=self.parse_categories)
        
            