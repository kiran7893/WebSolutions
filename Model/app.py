from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import pickle

app = Flask(__name__)
CORS(app)  # This allows CORS for all domains on all routes

# Load the trained model
model = pickle.load(open('website.pkl', 'rb'))

def predict_cost(features):
    columns = [
        'Number of Pages',
        'Stock Images_targuided',
        'SEO Design_targuided',
        'Analytics',
        'Image gallery',
        'Live chat',
        'Video gallery',
        'WhatsApp',
        'Appointment scheduling',
        'Chatbot',
        'Login',
        'None',
        'Payment',
        'New or Redesign_targuided',
        'UI/UX Design_targuided',
        'Content Writing Services_targuided',
        'E-commerce Functionality_targuided'
    ]
    df = pd.DataFrame([features], columns=columns)
    prediction = model.predict(df)
    return prediction[0]

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    
    features = {
        'New or Redesign_targuided': 1 if data['newOrRedesign'] == 'New' else 0,
        'Number of Pages': int(data['numPages']),
        'UI/UX Design_targuided': {'Standard': 0, 'Advanced': 1, 'Custom': 2}[data['uiUxDesign']],
        'E-commerce Functionality_targuided': 1 if data['ecommerceFunctionality'] == 'Yes' else 0,
        'Content Writing Services_targuided': 1 if 'Content Writing Services' in data['additionalServices'] else 0,
        'SEO Design_targuided': 1 if 'SEO Design' in data['additionalServices'] else 0,
        'Stock Images_targuided': 1 if 'Stock Images' in data['additionalServices'] else 0,
        'Analytics': 1 if 'Analytics' in data['basicFeatures'] else 0,
        'Image gallery': 1 if 'Image Gallery' in data['basicFeatures'] else 0,
        'Video gallery': 1 if 'Video Gallery' in data['basicFeatures'] else 0,
        'Live chat': 1 if 'Live Chat' in data['basicFeatures'] else 0,
        'WhatsApp': 1 if 'WhatsApp Integration' in data['basicFeatures'] else 0,
        'Appointment scheduling': 1 if 'Appointment Scheduling' in data['advancedFeatures'] else 0,
        'Chatbot': 1 if 'Chatbot' in data['advancedFeatures'] else 0,
        'Login': 1 if 'Login Systems' in data['advancedFeatures'] else 0,
        'Payment': 1 if 'Payment Gateways' in data['advancedFeatures'] else 0,
        'None': 1 if not data['advancedFeatures'] else 0
    }

    estimated_cost = predict_cost(features)
    return jsonify({'estimated_cost': float(estimated_cost)})

if __name__ == '__main__':
    app.run(debug=True)