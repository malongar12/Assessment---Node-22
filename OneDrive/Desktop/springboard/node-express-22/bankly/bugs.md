1. missing .env file
2. get all user routes already have authUser so there's no need for requirelogin
3. In the DELETE route,  we're calling User.delete(req.params.username) but you’re not awaiting the result. This could result in the response being sent before the deletion is actually completed.
4. In the PATCH /[username] route, we're deleting the _token field from the request body, but this field is never actually part of the req.body