<?php
header('Content-Type: application/json');

$file = 'data.json';

// Initialize file if not exists
if (!file_exists($file)) {
    file_put_contents($file, json_encode([]));
}

$action = $_GET['action'] ?? '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    if ($action === 'save') {
        file_put_contents($file, json_encode($data, JSON_PRETTY_PRINT));
        echo json_encode(['status' => 'success']);
    }
} else {
    if ($action === 'load') {
        echo file_get_contents($file);
    }
}
?>
