# Document Viewer



Document viewer widget is used to show documents on a page. The widget currently supports the following extensions-

1. &#x20;.txt
2. .pdf
3. .ppt (not supported by base64)
4. .pptx
5. .docx
6. .xlsx

{% embed url="https://youtu.be/UuecSUqFOpQ" %}

### Displaying Data

Switch group’s **options** can be populated from a data source like an API / Query by transforming the incoming data to an array of \\(label, value\\). The transformation can be performed using javascript. So if the data is an array, we can transform it using the [**Array.map**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/TypedArray/map) function.

Documents can be populated from a datasource like API or Query in which the incoming data points to the URL of the file.\


### Properties

#### Widget Properties

| Property            | Description                                                                                                                                                                                |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Document Link**   | Link to the URL of the supported file types. The file extension also needs to be present as part of the URLs.                                                                              |
| **Visible**         | Controls widget's visibility on the page. When turned off, the widget will not be visible when the app is published.                                                                       |
| **Animate Loading** | Control’s widget’s loading animation on the page. When turned off, the widget will load without any skeletal animation. This can be controlled with JS until all the widgets are rendered. |