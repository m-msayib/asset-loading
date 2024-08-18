#version 330 core

out vec4 fragColor;

in vec3 vertColor;
in vec3 uvCoord;
in vec3 vertCoord;
in vec3 vertNormal;

uniform vec3 lightPos;
uniform vec3 lightColor;
uniform vec3 cameraPos;

const float AMBIENT_INTENSITY = 0.1f; //ambient light
const float SPECULAR_INTENSITY = 7.5f; //controls intensity of spec
const float SPECULAR_POWER_FAC = 64.f; //controls sharpness of specular spot [larger means smaller more concentrated spot]

void main(){



  fragColor = vec4(1.f);
}

