Projekt został stworzony żeby zaprezentować umiejętności działania w angularze.

Stwrzoone komponenty nie zostały w żaden specjalny sposób wystylowane oraz nazwy klas z html również nie były istotne w projekcie.

Projekt:

---
  |
  ---cypress -> test sprawdzający czy toggle button działa oraz czy zmienaia się wartość dla wygrania gry jakiegokolwiek gracza dla typu gry: Ludzie
  |
  |
  ---src
      |
      |
      |
      add---card ->do wyświetlania rekordów dla danego gracza
            objects -> zbiór obiektów dedykowanych dla aplikacji
            service -> serwis który ma pobierać dane api
            app -> logika polegająca na losowaniu elementów z api, uwzględniając wybór typu gry, sprawdzanie kto wygrał oraz liczenie punktów oraz wysyłka danych do koponentu card
            
Aby uruchomić program należy użyć:
ng serve

Aby uruchomić testy należy w konsoli uzyć:
ngx cypress open

Należy pamiętać aby wywoływać komendy w folderze z projektem.
Aplikacja wstaje na portcie: 4200.
