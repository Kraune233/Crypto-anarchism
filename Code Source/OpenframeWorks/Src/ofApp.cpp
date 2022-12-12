#include "ofApp.h"
using namespace cv;

//--------------------------------------------------------------
void ofApp::setup(){
	ofSetFrameRate(25);
	
	ofBackground(239);
	ofSetRectMode(ofRectMode::OF_RECTMODE_CENTER);

	//1
	this->cap.open("C:\\Users\\Yao\\Videos\\Captures\\IMG_1499.mp4");
	this->cap_size = Size(1280, 720);

	this->image.allocate(this->cap_size.width, this->cap_size.height, OF_IMAGE_COLOR);
	this->frame = Mat(Size(this->image.getWidth(), this->image.getHeight()), CV_MAKETYPE(CV_8UC3, this->image.getPixels().getNumChannels()), this->image.getPixels().getData(), 0);

	this->gray_image.allocate(this->cap_size.width, this->cap_size.height, OF_IMAGE_GRAYSCALE);
	this->gray = Mat(this->gray_image.getHeight(), this->gray_image.getWidth(), CV_MAKETYPE(CV_8U, this->gray_image.getPixels().getNumChannels()), this->gray_image.getPixels().getData(), 0);

	this->edge_image.allocate(this->cap_size.width, this->cap_size.height, OF_IMAGE_GRAYSCALE);
	this->edge = Mat(this->edge_image.getHeight(), this->edge_image.getWidth(), CV_MAKETYPE(CV_8U, this->edge_image.getPixels().getNumChannels()), this->edge_image.getPixels().getData(), 0);

	
}

//--------------------------------------------------------------
void ofApp::update(){
	Mat cap_frame;
	this->cap >> cap_frame;
	if (cap_frame.empty()) {

		cap.set(CAP_PROP_POS_FRAMES, 1);
		return;
	}
	resize(cap_frame, this->frame, this->cap_size);
	cvtColor(this->frame, this->frame, COLOR_BGR2RGB);
	cvtColor(this->frame, this->gray, COLOR_RGB2GRAY);

	this->frame.forEach<Vec3b>([](Vec3b& p, const int* position) -> void {

		p[0] = floor(p[0] / 30) * 48;
		p[1] = floor(p[1] / 30) * 260;
		p[2] = floor(p[2] / 30) * 148;
		});

	Canny(this->gray, this->edge, 10, 200);

	Mat color_edge;
	cvtColor(this->edge, color_edge, cv::COLOR_GRAY2RGB);

    subtract(this->frame, color_edge, this->frame);

	this->image.update();
	this->gray_image.update();
	this->edge_image.update();
}

//--------------------------------------------------------------
void ofApp::draw(){

	this->cam.begin();

	ofSetColor(255);
	this->image.draw(0, 0);
}

//--------------------------------------------------------------
void ofApp::keyPressed(int key){

}

//--------------------------------------------------------------
void ofApp::keyReleased(int key){

}

//--------------------------------------------------------------
void ofApp::mouseMoved(int x, int y ){

}

//--------------------------------------------------------------
void ofApp::mouseDragged(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mousePressed(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mouseReleased(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mouseEntered(int x, int y){

}

//--------------------------------------------------------------
void ofApp::mouseExited(int x, int y){

}

//--------------------------------------------------------------
void ofApp::windowResized(int w, int h){

}

//--------------------------------------------------------------
void ofApp::gotMessage(ofMessage msg){

}

//--------------------------------------------------------------
void ofApp::dragEvent(ofDragInfo dragInfo){ 

}
