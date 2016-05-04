/*
	http://www.cnblogs.com/blog-leo/p/5124228.html
	http://www.gruntjs.net/configuring-tasks
	https://github.com/seajs/seajs/issues/672
	https://github.com/jixiangac/lili/tree/master/public/js
	http://www.cnblogs.com/hongchenok/p/3924633.html
	http://www.jackness.org/2015/01/02/grunt-实例之-构建-seajs-项目/
	
	将命令行的当前目录转到项目的根目录下
	cd /d F:\WWW\SeaJS\static\
	
	安装Grunt 和 grunt插件
	npm install grunt --save-dev
	npm install grunt-cmd-transport --save-dev
	npm install grunt-cmd-concat --save-dev
	npm install grunt-contrib-uglify --save-dev
	npm install grunt-contrib-clean --save-dev
*/
module.exports = function(grunt) {
	require('time-grunt')(grunt); //Time how long tasks take
	//require('load-grunt-tasks')(grunt);//Load grunt tasks automatically

	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"), //引入package.json的JSON元数据
		/**
		 * step 1:
		 * 创建一个临时目录
		 * 将需要合并的js文件转为具名函数，并保持独立地保存在这个临时目录
		 */
		transport: { //task任务
			options: {
				paths: ['.'], //模块的路径，默认的是sea-modules
				alias: '<%= pkg.spm.alias %>' //模板字符串语法来从package.json引入模块别名
			},
			util: { //target
				options: {
					idleading: 'dist/util', //构建后的模块ID的前缀
				},
				files: [{
					expand: true, //开启处理动态的src-dest文件映射
					filter: 'isFile', //匹配过滤src文件路径
					cwd: 'util', //所有src指定的匹配都将相对于此处指定的路径（但不包括此路径）
					src: '**/*.js', //相对于cwd路径的匹配模式(**代表当前路径以及子路径)
					dest: '.build/dist/util' //目标文件路径前缀
				}]
			},
			view: {
				options: {
					idleading: 'dist/view/',
				},
				files: [{
					expand: true,
					filter: 'isFile',
					cwd: 'dist/view',
					src: '**/*.js',
					dest: '.build/dist/view'
				}]
			}
		},
		/**
		 * step 2:
		 * 将临时目录下独立的具名函数文件 合并为 1个 js 文件
		 * 将这个合并的 js 文件 拷贝到 我们的输出目录
		 */
		concat: {
			options: {
				separator: ';', // 定义一个用于插入合并输出文件之间的字符
				include: 'relative' //relative（默认）只会合并相对标识的依赖；；all会合并所有依赖
			},
			util: {
				files: [{
					expand: true,
					ext: '.js',
					cwd: '.build/dist/util/',
					src: ['**/*.js'],
					dest: 'dist/util/'
				}]
			},
			view: {
				files: {
					'dist/view/demo/demo.js': ['.build/dist/view/demo/demo.js'],
					'dist/view/demo/demo-debug.js': ['.build/dist/view/demo/demo-debug.js'],

					'dist/view/react-demo/react-demo.js': ['.build/dist/view/react-demo/react-demo.js'],
					'dist/view/react-demo/react-demo-debug.js': ['.build/dist/view/react-demo/react-demo-debug.js'],

					'dist/view/vue-demo/vue-demo.js': ['.build/dist/view/vue-demo/vue-demo.js'],
					'dist/view/vue-demo/vue-demo-debug.js': ['.build/dist/view/vue-demo/vue-demo-debug.js']
				}
			}
		},
		/**
		 * step 3:
		 * 压缩 这个 合并后的 文件
		 */
		uglify: {
			util: {
				options: {
					// 此处定义的banner注释将插入到输出文件的顶部
					banner: '/*! <%= pkg.author %>  @  <%= grunt.template.today("dd-mm-yyyy") %> */\n'
				},
				files: [{
					expand: true,
					ext: '.js',
					cwd: 'dist/',
					src: ['**/*.js', '!**/*-debug.js'],
					dest: 'dist/'
				}]
			},
			view: {
				options: {
					// 此处定义的banner注释将插入到输出文件的顶部
					banner: '/*! <%= pkg.author %>  @  <%= grunt.template.today("dd-mm-yyyy") %> */\n'
				},
				files: {
					'dist/view/demo/demo.js': ['dist/view/demo/demo.js'],
					'dist/view/react-demo/react-demo.js': ['dist/view/react-demo/react-demo.js'],
					'dist/view/vue-demo/vue-demo.js': ['dist/view/vue-demo/vue-demo.js']
				}
			}
		},
		/**
		 * step 4:
		 * 将这个临时目录删除
		 */
		clean: {
			spm: ['.build']
		}
	});
	// 加载任务插件
	grunt.loadNpmTasks('grunt-cmd-transport');
	grunt.loadNpmTasks('grunt-cmd-concat');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	// 被执行的任务列表
	grunt.registerTask('build', ['transport', 'concat', 'uglify', 'clean']);
};