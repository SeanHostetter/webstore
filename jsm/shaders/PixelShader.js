/**
 * Pixelation shader
 */

 const PixelShader = {

	uniforms: {

		'tDiffuse': { value: null },
		'resolution': { value: null },
<<<<<<< HEAD
		'pixelSize': { value: 4},
=======
		'pixelSize': { value: 4 },
>>>>>>> 40eaebe2b80930f4a7e136c004d355a6f2b6d489

	},

	vertexShader: /* glsl */`

		varying highp vec2 vUv;

			void main() {

				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,

	fragmentShader: /* glsl */`

		uniform sampler2D tDiffuse;
		uniform float pixelSize;
		uniform vec2 resolution;

		varying highp vec2 vUv;

		void main(){

			vec2 dxy = pixelSize / resolution;
			vec2 coord = dxy * floor( vUv / dxy );
			gl_FragColor = texture2D(tDiffuse, coord);

		}`

};

export { PixelShader };