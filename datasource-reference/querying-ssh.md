# SSH Commands

{% hint style="warning" %}
The following document assumes that you understand the [basics of connecting to databases on Appsmith](../core-concepts/connecting-to-data-sources/connecting-to-databases/). If not, please go over them before reading further.
{% endhint %}

## Connection Settings

Appsmith needs the following parameters for connecting to a SSH server:

{% hint style="success" %}
All required fields are suffixed with an asterisk \(\*\).
{% endhint %}

### **Connection**

You need to fill in the following parameters:

* **Host Address\*:** Fill in the database host’s address.
* **Port\*:**  Fill the port witch the SSH server is listening to it.

### **Authentication**

You need to fill in the following parameters:

* **Authentication Type\*:** You need to choose one of the following options:
  * **Use password based authentication:** Choosing this option you can work with the SSH server by providing a _Username_ and _Password_.
    * **Username\*:** Fill username required for authenticating connection requests to your SSH server.
    * **Password\*:** Fill password required for authenticating connection requests for the given username to the SSH server.
    
  * **Use identity file based authentication:** Choosing this option you can work with the SSH server by providing a _Username_ and uploading a _private key_ .
    * **Username\*:** Fill username required for authenticating connection requests to your SSH server.
    * **Upload private key\*:** Select and upload a private key required for the given username to the SSH server.
    * **Private key passphrase\:** Fill this if the private key is protected with a passphrase.