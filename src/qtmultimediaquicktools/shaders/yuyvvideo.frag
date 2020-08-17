// Reference: qgsvideonode_yuv.cpp:387 to 398
uniform sampler2D yTexture; // Y component passed as GL_LUMINANCE_ALPHA, in yuyv Y = r
uniform sampler2D uvTexture; // UV component passed as RGBA macropixel, in yuyv U = g, V = a
uniform mediump mat4 colorMatrix;
uniform lowp float opacity;
varying highp vec2 qt_TexCoord;

void main()
{
    mediump vec3 YUV = vec3(texture2D(yTexture, qt_TexCoord).r, texture2D(uvTexture, qt_TexCoord).ga);

    gl_FragColor = colorMatrix * vec4(YUV, 1.0) * opacity;
}
