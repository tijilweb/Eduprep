from flask import Flask, render_template, jsonify
import os

app = Flask(__name__)

# Sample API endpoint to get book data
@app.route('/api/books')
def get_books():
    books_data = {
        "physics": [
            {
                "title": "Cengage Physics",
                "description": "Complete Cengage Physics series for JEE preparation",
                "link": "https://drive.google.com/drive/folders/1oFFzlQsGRN144RqGVd5kr7tmib2IPcsz",
                "contributor": None
            },
            # Add more books as needed
        ],
        # Other categories similarly
    }
    return jsonify(books_data)

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)