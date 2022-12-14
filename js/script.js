app.controller("duvarController", function($scope, $http) {
    $scope.author = "Yeni Kullanıcı";
    $scope.newAuthorName = null;
    $scope.newMessage = null;
    $scope.tags = ["Irkçılık", "Cinsiyetçilik", "Kızdırma", "Nötr"];

    $scope.sampleMessages = [
        /*{
            id: "i4xkTa7ZscEp",
            author:"Test Kullanıcı 2",
            message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dictum massa nisl. Aliquam a lacinia elit. Morbi sed bibendum nisi. Donec consectetur iaculis elementum. Proin sollicitudin lacinia feugiat. Nullam tincidunt viverra ex vitae.",
            tags:[
                {
                    label: "Irkçılık",
                    score:80.32
                },
                {
                    label: "Cinsiyetçilik",
                    score:92.44
                }
            ]
        },*/
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
        $http({
            method: 'POST',
            url: 'https://api-inference.huggingface.co/models/nanelimon/bert-base-turkish-bullying',
            data: { inputs: $scope.newMessage }
        }).then(function(response){
            let res = response.data[0];
            $.each(res, function (k,v) {
                v.score = parseFloat(( v.score*100).toFixed(2));
            });
            $scope.sampleMessages.unshift({
                id: Date.now().toString(),
                author: $scope.author,
                message: $scope.newMessage,
                tags: res
            });
        }, function(err){
            console.error(err);
        });
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
                score: Math.floor(Math.random() * 100)
            })
        }

        return tags;
    };


});