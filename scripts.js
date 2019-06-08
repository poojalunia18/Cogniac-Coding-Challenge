const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'cogniac.jpg';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);
var url = 'index.html'; //A local page

function data(url, callback) {
var request = new XMLHttpRequest();
request.open('GET', 'https://api.cogniac.io/1/version', true);

request.onreadystatechange = function() {
  {
    data: [
      {
        "detections": [
          {
            "app_data": null,
            "app_data_type": null,
            "app_id": "0Am1V3kr",
            "created_at": 1497662139.841296,
            "detection_id": "QMQYDAVPXP:0",
            "focus": null,
            "media_id": "XVLNY8FEKGT1VZC3XN2JGS2ZVAWH",
            "model_id": "Hpo-d-6fa6-2Xg6MZdpxEC2Jvx3K1-YN_mtsv0_4782.tgz",
            "prev_prob": null,
            "probability": 0.001000835148309544,
            "subject_uid": "cat_a1",
            "uncal_prob": 0,
            "user_id": null
          }
        ],
        "media": {
          "author": null,
          "author_profile_url": null,
          "created_at": 1497662135.660577,
          "external_media_id": null,
          "filename": null,
          "frame": null,
          "image_height": 1200,
          "image_width": 800,
          "license": null,
          "md5": "05180dac616104ff004027a5f274d6ad",
          "media_format": "JPEG",
          "media_id": "XVLNY8FEKGT1VZC3XN2JGS2ZVAWH",
          "media_src": "twitter",
          "media_timestamp": 1497662135.629489,
          "media_url": "https://cogniac-media.s3.amazonaws.com/XVLNY8FEKGT1VZC3XN2JGS2ZVAWH",
          "meta_tags": ["twitter"],
          "network_camera_id": null,
          "original_landing_url": null,
          "original_url": null,
          "parent_media_id": null,
          "parent_media_ids": [],
          "preview_url": null,
          "resize_urls": {
            "454": "https://cogniac-media.s3.amazonaws.com/XVLNY8FEKGT1VZC3XN2JGS2ZVAWH_max_454",
            "750": "https://cogniac-media.s3.amazonaws.com/XVLNY8FEKGT1VZC3XN2JGS2ZVAWH_max_750"
          },
          "set_assignment": "training",
          "size": 168423,
          "source_url": null,
          "status": "success",
          "tenant_id": "skjdfh853k4jt",
          "title": null,
          "uploaded_by_user": null,
          "video": false
        },
        "focus":{
          "box": {"x0": 50, "x1": 275, "y0": 634, "y1": 870}
        },
        "updated_at": 1497662139.841296
      },
    ,
    
    { data: [limit,start,end,probability_lower,probablity_upper,reverse,cursor],

      paging: {
      
      next: ‘https://api.cogniac.io/1/applications/QBzQ3t1x/detections?&consensus_none=False&reverse=True&start=0&limit=10&abridged_media=False&only_model=True&end=1559164068.05&probability_upper=1.0&probability_lower=0.5&only_user=False&cursor=1558972409.525230’}}
  request.send()
}},}}}