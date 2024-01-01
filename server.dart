import 'dart:io';


void main ()  {

  HttpServer.bind(InternetAddress.anyIPv4, 8000).then((server) => 
    server.listen((request) async { 

      
        HttpResponse res = request.response;
        print (request.requestedUri);

        res.headers.contentType = ContentType('text','html');
        await File('index.html').openRead().pipe(res);
        res.close();


      }
    )  
  );

}