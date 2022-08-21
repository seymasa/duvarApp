app.controller("duvarController", function($scope) {
    $scope.author = "Yeni Kullanıcı";

    $scope.sampleMessages = [
        {
            id: "i4xkTa7ZscEp",
            author:"Test Kullanıcı 2",
            message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dictum massa nisl. Aliquam a lacinia elit. Morbi sed bibendum nisi. Donec consectetur iaculis elementum. Proin sollicitudin lacinia feugiat. Nullam tincidunt viverra ex vitae.",
            tags:[
                {
                    label: "Irkçılık",
                    value:80.32
                },
                {
                    label: "Cinsiyetçilik",
                    value:92.44
                }
            ]
        },
        {
            id: "aLrT9cgK2Z3o",
            author:"Test Kullanıcı 3",
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
        {
            id: "i4xkTa7ZscEZ",
            author:"Test Kullanıcı 4",
            message:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dictum massa nisl. Aliquam a lacinia elit. Morbi sed bibendum nisi. Donec consectetur iaculis elementum. Proin sollicitudin lacinia feugiat. Nullam tincidunt viverra ex vitae.",
            tags:[
                {
                    label: "Irkçılık",
                    value:80.32
                },
                {
                    label: "Cinsiyetçilik",
                    value:92.44
                }
            ]
        },
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
});