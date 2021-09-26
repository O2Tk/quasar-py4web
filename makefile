new_py4web:
	git clone https://github.com/web2py/py4web.git
	cp -r ./py4web-app/* ./py4web/apps/_default

new_quasar:
	@echo "*******************INSTRUCTIONS*************************"
	@echo "*******************INSTRUCTIONS*************************"
	@echo "*******************INSTRUCTIONS*************************"
	@echo "*******************INSTRUCTIONS*************************"
	@echo "Choose: Sass with SCSS syntax"
	@echo "Enable: ESLint, Vuex, and Axios"
	@echo "*******************INSTRUCTIONS*************************"
	quasar create quasar
	cp -r ./quasar-src/* ./quasar/src


all: new_py4web new_quasar
	cd quasar; quasar build -m spa
	cp -r ./quasar/dist/spa ./py4web/apps/_default/static/
	cd py4web; python py4web.py run ./apps/

debug:
	cd quasar; quasar build -d -m spa
	cp -r ./quasar/dist/spa ./py4web/apps/_default/static/

save:
	cp -r ./py4web/apps/_default/* ./py4web-app/
	cp -r ./quasar/src/* ./quasar-src/

clean:
	rm -rf py4web
	rm -rf quasar
