app.controller("duvarController", function($scope, $http) {
    $scope.author = "Yeni Kullanıcı";
    $scope.newAuthorName = null;
    $scope.newMessage = null;
    $scope.tags = ["Siyasi Zorbalık", "Irkçılık", "Akran Zorbalığı", "Cinsiyetçilik", "Kızdırma"];

    $scope.sampleMessages = [
        {
            id: "aLrT9cgK2Z3G",
            author:"Test Kullanıcı 4",
            message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis scelerisque commodo sem, non commodo ex egestas a. Nullam finibus purus sem, sit amet ornare purus cursus in. Phasellus sit amet lacus ut lectus scelerisque facilisis a quis nibh. Suspendisse eu vestibulum.",
            tags:[
                {
                    label: "Saldırganlık",
                    value:73.28
                },
                {
                    label: "Irkçılık",
                    value:76.99
                },
                {
                    label: "Cinsiyetçilik",
                    value:67
                }
            ]
        },
    ];

    $scope.deleteMessage = function (id) {
        console.log(`${id}'li mesaj silinecek`);
        $scope.sampleMessages = $scope.sampleMessages.filter(msg => msg.id !== id);

        /* Mesajı silmek için yukarıdaki kod yerine aşağıdaki kod kullanılmalıdır.
        $http({
            method: 'POST',
            url: 'delete_message_url',
            data: { id: id }
        }).then(function(response){
            console.log(response.data)
        }, function(err){
            console.error(err);
        });
        */
    };

    $scope.insertNewMessage = function () {
        $scope.sampleMessages.unshift({
            id: Date.now().toString(),
            author: $scope.author,
            message: $scope.newMessage,
            tags: $scope.randomTagGenerator()
        });
        $scope.newMessage = null;
    };

    $scope.setNewAuthorName = function () {
        $scope.author = $scope.newAuthorName;
        $scope.newAuthorName = null;

        $('#editUser').modal('hide');
    };

    $scope.randomTagGenerator = function () { //tag oluşturmak için yazdım gereksiz :)
        let tagCount = Math.floor(Math.random() * 4 + 1);
        let tags = [];

        for (let i = 0; i < tagCount; i++) {
            tags.push({
                label: $scope.tags[Math.floor(Math.random() * $scope.tags.length)],
                value: Math.floor(Math.random() * 100)
            })
        }

        return tags;
    };


});