# LoanDefaultPrediction

This project serves as a proof of concept for an e2e system predicting whether a loan will default or not based on multiple parameters.

The data exploration, preprocessing and the training/evaluation of the model can be found in the `exploration-preprocessing-training.ipynb` Jupyter notebook.

The trained model was deployed to Google Cloud Platform, specifically its Vertex AI.

![image](https://github.com/LevMartinZachar/LoanDefaultPrediction/assets/25955931/428c126d-a1f1-4b42-8212-2e145489f7b2)

Consequently `predict-loan` endpoint was created, that allows for logging, monitoring and provide explainability options for each request made for the PredictionService.

![image](https://github.com/LevMartinZachar/LoanDefaultPrediction/assets/25955931/88282001-cee8-426c-a417-05a6d364f5fc)

Demonstrated in the following screenshot (seen at the bottom), the `predict-loan` endpoint accepts a JSON request and returns a prediction as a response.

![image](https://github.com/LevMartinZachar/LoanDefaultPrediction/assets/25955931/53ad3817-77c5-4c0f-a6c7-5edb0ef24ac6)

For further evidence of a working proof of concept, the same prediction (same model and input vector) is made in the Jupyter notebook, and via the locally served Angular web app.

![image](https://github.com/LevMartinZachar/LoanDefaultPrediction/assets/25955931/789eb3b8-1d96-4914-9962-066d5e3b33d1)

![image](https://github.com/LevMartinZachar/LoanDefaultPrediction/assets/25955931/f29c7f5f-2f77-4af3-98da-44dd5a84b527)
![image](https://github.com/LevMartinZachar/LoanDefaultPrediction/assets/25955931/06226ad2-e03b-4d7f-98f9-1df0554451aa)
![image](https://github.com/LevMartinZachar/LoanDefaultPrediction/assets/25955931/f84ba471-339f-496f-bc4c-9d5ae2da9f49)

In order to complete this proof of concept, an UI in the Angular web app needs to be implemented processing user input, mapping it and scaling it (using saved normalization values from train data) to be consequently used as payload for the request towards the `predict-loan` endpoint.

The response can then be enriched via the explainability method provided by the PredictionService, which the endpoint may use.

# Brief report on model choice, architecture of app, deployment strategy, and monitoring system
Upon reviewing simmilar models trained on the same dataset, I came to the conclusion that feed-forward neural networks work better than XGBoost or RandomForest algorithm. (Achieved simmilar results with less features) If not for time constraints, a rigorous comparison would be made of all the model options.

The UI was to be implemented using the Angular JavaScript framework, to allow production ready and scalable application in the future.

Web app would be typically deployed to Firebase, and the model is deployed to Vertex AI service, which allows for seamless versioning, and allows for continuous rollouts of different versions of the models.

The monitoring system is tied to the deployment environments, where both Firebase and Vertex AI is able to provide thorough logging/monitoring capabilities.
