from flask import Flask, request, jsonify, abort
from flask_cors import CORS
import json

with open('data.json') as f:
    data = json.load(f)

app = Flask(__name__)
CORS(app)

FILTERS = ['last_3days', 'yesterday', 'last_hour']


def get_field_with_filter(field: str, filter_param: str) -> str:
    return f'{field}_{filter_param}'


@app.route('/api', methods=['GET'])
def gen_book():
    if not ('filter' in request.args):
        abort(400)

    filter_param = request.args.get('filter')
    if filter_param not in FILTERS:
        return jsonify({"data": None})

    stat = data['data'][0]
    return jsonify({
        "data": {
            'funnel': {
                'bookings_current': stat.get(get_field_with_filter("bookings_current", filter_param)),
                'bookings_previous': stat.get(get_field_with_filter("bookings_previous", filter_param)),
                'str': stat.get(get_field_with_filter("str", filter_param)),
                'avg_price': stat.get(get_field_with_filter("avg_price", filter_param)),
                'clicks_current': stat.get(get_field_with_filter("clicks_current", filter_param)),
                'clicks_previous': stat.get(get_field_with_filter("clicks_previous", filter_param)),
                'ctr': stat.get(get_field_with_filter("ctr", filter_param)),
                'searches_current': stat.get(get_field_with_filter("searches_current", filter_param)),
                'searches_previous': stat.get(get_field_with_filter("searches_previous", filter_param)),
                'mobile_pessimizer': stat.get("mobile_pessimizer"),
                'web_pessimizer': stat.get("web_pessimizer"),
            },
            'statistics': {
                'errors': stat.get(get_field_with_filter("errors", filter_param)),
                'avg_errors': stat.get(get_field_with_filter("avg_errors", filter_param)),
                'zeroes': stat.get(get_field_with_filter("zeroes", filter_param)),
                'avg_zeroes': stat.get(get_field_with_filter("avg_zeroes", filter_param)),
                'timeout': stat.get(get_field_with_filter("timeout", filter_param)),
                'avg_timeout': stat.get(get_field_with_filter("avg_timeout", filter_param)),
            },
            'errors': data.get(get_field_with_filter("errors", filter_param)),
            'gate_id': stat.get("gate_id"),
        },
    })
