# Create venv
python3 -m venv <name_of_virtualenv>
# Activate venv. Windows chandu te bin nai. Scripts er bhetor
source env/bin/activate
# Deactivate venv
deactivate

# Lambda with third party packages
pip install --target ./package requests
# my-deployment-package.zip$
#   │ lambda_function.py
#   │ __pycache__
#   │ certifi/
#   │ certifi-2020.6.20.dist-info/
#   │ chardet/
#   │ chardet-3.0.4.dist-info/
#   ...
