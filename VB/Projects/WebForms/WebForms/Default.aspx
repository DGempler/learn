<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="WebForms._Default" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">

    <h2>Products</h2>
    <table>
        <thead>
            <tr><th>Name</th><th>Price</th></tr>
        </thead>
        <tbody id="products"></tbody>
    </table>

    <script src="Scripts/jquery-1.10.2.min.js"></script>

    <script type="text/javascript">

        function getProducts() {
            $.getJSON("api/products",
                function(data) {
                    $('#products').empty();

                    $.each(data, function(key, val) {
                        var row = '<td>' + val.Name + '</td><td>' + val.Price + '</td>';
                        $('<tr/>', { html: row})
                            .appendTo($('#products'));
                    });

                });
            }

        $(getProducts);


    </script>


</asp:Content>
