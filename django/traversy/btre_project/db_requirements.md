### schemas:


### MODEL/DB FIELDS


### LISTING
+ id: int
+ realtor: int (foreign key [realtor])
+ title: str
+ address: str
+ city: str
+ state: str
+ zipcode: str
+ description: text
+ price: int
+ bedrooms: int
+ bathrooms: int
+ garage: int [0]
+ sqft: int
+ lot_size: float
+ is_published: bool [TRUE]
+ list_date: date
+ photo_main: str
+ photo_1: str
+ photo_2: str
+ photo_3: str
+ photo_4: str
+ photo_5: str
+ photo_6: str

### REALTOR
+ id: int
+ name: str
+ photo: str
+ description: text
+ email: str
+ phone: str
+ is_mvp: bool [0]
+ hire_date: date

### CONTACT
+ id: int
+ user_id: int
+ listing: int
+ listing_id: int
+ name: str
+ email: str
+ phone: str
+ message: text
+ contact_date: date
